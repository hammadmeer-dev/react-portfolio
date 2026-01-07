export const calculateDuration = (startDate, endDate = "Present") => {
    const start = new Date(startDate);
    const end = endDate === "Present" ? new Date() : new Date(endDate);

    // Calculate difference in months
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    // Adjust if months difference is negative
    if (months < 0) {
        years--;
        months += 12;
    }

    // Add 1 month to include the starting month (e.g., Oct to Jan is 4 months: Oct, Nov, Dec, Jan)
    // Or typically standard business calculation is just difference. 
    // User asked "Oct 2025 - Present · 3 mos". 
    // If today is Jan 2026. Oct(10) to Jan(1) -> 2026-2025=1 yr. 1-10 = -9. 12-9 = 3 months. Correct.
    // Wait, Oct to Jan is Oct, Nov, Dec, Jan? That's 4 months inclusive? 
    // LinkedIn usually does difference. 
    // Let's stick to standard difference logic primarily, maybe +1 if they want inclusive. 
    // But standard math: 
    // Jan 8 2026 - Oct 1 2025. 
    // years=1, months = 0 - 9 = -9. years=0, months=3. So 3 months.
    // It seems correct.

    // Format the output
    const parts = [];
    if (years > 0) {
        parts.push(`${years} yr${years > 1 ? "s" : ""}`);
    }
    if (months > 0) {
        parts.push(`${months} mos`);
    }

    if (parts.length === 0) return "0 mos"; // Or "Less than a month"

    return parts.join(" ");
};

export const formatDate = (dateString) => {
    if (dateString === "Present") return "Present";
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};
