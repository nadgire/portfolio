"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Timeline = ({ data, updatePeriod }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref, data]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    const startEditing = (index, currentPeriod) => {
        setEditingIndex(index);
        setEditValue(currentPeriod);
    };

    const saveEdit = (index) => {
        if (editValue && isValidPeriodFormat(editValue)) {
            updatePeriod(index, editValue);
        }
        setEditingIndex(null);
        setEditValue("");
    };

    const isValidPeriodFormat = (value) => {
        const regex = /^[A-Za-z]{3}\s\d{4}\s-\s([A-Za-z]{3}\s\d{4}|Present)$/;
        return regex.test(value);
    };

    const calculateTotalPeriod = (data) => {
        if (!data || data.length === 0) return "0 years";

        const monthMap = {
            january: "Jan", jan: "Jan", february: "Feb", feb: "Feb",
            march: "Mar", mar: "Mar", april: "Apr", apr: "Apr",
            may: "May", june: "Jun", jun: "Jun", july: "Jul", jul: "Jul",
            august: "Aug", aug: "Aug", september: "Sep", sep: "Sep",
            october: "Oct", oct: "Oct", november: "Nov", nov: "Nov",
            december: "Dec", dec: "Dec",
        };

        const parseDate = (str) => {
            if (!str) return null;
            if (str.toLowerCase().includes("present")) return new Date();
            const [month, year] = str.split(" ").map((s) => s.trim());
            const normalizedMonth = monthMap[month.toLowerCase()] || month;
            try {
                const date = new Date(`${normalizedMonth} 1, ${year}`);
                return isNaN(date.getTime()) ? null : date;
            } catch (e) {
                return null;
            }
        };

        // Sort periods by start date to handle overlaps
        const periods = data
            .map((item) => {
                const [start, end] = item.period.split(" - ").map((s) => s.trim());
                const startDate = parseDate(start);
                const endDate = parseDate(end);
                return { startDate, endDate };
            })
            .filter((p) => p.startDate && p.endDate)
            .sort((a, b) => a.startDate - b.startDate);

        if (periods.length === 0) return "0 years";

        // Merge overlapping periods
        const merged = [];
        let current = { ...periods[0] };

        for (let i = 1; i < periods.length; i++) {
            if (periods[i].startDate <= current.endDate) {
                if (periods[i].endDate > current.endDate) {
                    current.endDate = periods[i].endDate;
                }
            } else {
                merged.push(current);
                current = { ...periods[i] };
            }
        }
        merged.push(current);

        // Sum durations of merged periods
        let totalMonths = 0;
        merged.forEach(({ startDate, endDate }) => {
            const months =
                (endDate.getFullYear() - startDate.getFullYear()) * 12 +
                (endDate.getMonth() - startDate.getMonth()) +
                (endDate.getDate() >= startDate.getDate() ? 1 : 0); // Round up partial months
            totalMonths += months;
        });

        if (totalMonths < 0) totalMonths = 0;
        const years = Math.floor(totalMonths / 12);
        const remMonths = totalMonths % 12;
        return `${years > 0 ? years + " year" + (years > 1 ? "s" : "") : ""}${years && remMonths ? " " : ""}${remMonths ? remMonths + " month" + (remMonths > 1 ? "s" : "") : ""}`.trim() || "0 years";
    };

    return (
        <div className="w-full font-sans md:px-10" ref={containerRef}>
            <div className="max-w-7xl mx-auto py-14 px-4 md:px-8 lg:px-10">
                <h2 className="text-xl md:text-2xl mb-4 text-orange-400 max-w-4xl">
                    Changelog from my journey
                </h2>
                <p className="text-gray-400 text-sm md:text-xl max-w-sm">
                    I've total <span>{calculateTotalPeriod(data)}</span> of working experience in IT industry. Here's a timeline of my journey.
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`flex justify-start ${index === 0 ? "md:pt-10" : "pt-10 md:pt-40"}`}
                    >
                        <div className="sticky flex flex-col md:flex-row z-10 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#30011E] flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl lg:text-3xl font-bold text-gray-100 text-shadow w-80">
                                {item.title}
                            </h3>
                        </div>

                        <div className="pl-20 md:pl-0 pr-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-2 text-left font-bold text-gray-100 text-shadow w-56">
                                {item.title}
                            </h3>
                            {editingIndex === index ? (
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                        className="text-xl md:text-2xl text-gray-300 bg-[#30011E] border border-gray-500 rounded px-2 py-1"
                                        placeholder="MMM YYYY - MMM YYYY or Present"
                                    />
                                    <button
                                        onClick={() => saveEdit(index)}
                                        className="text-sm bg-green-600 text-white px-2 py-1 rounded"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditingIndex(null)}
                                        className="text-sm bg-red-600 text-white px-2 py-1 rounded"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <div
                                    className="text-xl md:text-2xl text-gray-300 cursor-pointer"
                                    onClick={() => startEditing(index, item.period)}
                                >
                                    {item.period}
                                </div>
                            )}
                            <div className="text-xl md:hidden text-gray-400">
                                {item.content}
                            </div>
                        </div>

                        <div className="hidden md:block relative pr-4 w-full">
                            <div className="hidden md:block md:text-2xl text-gray-400">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}

                <div
                    style={{ height: height + "px" }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{ height: heightTransform, opacity: opacityTransform }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-800 via-yellow-400 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Timeline;