export type CertificateType = {
    title: string
    issuer: string
    date: string
    image: string
}

export const certificatesHeadLine = "My Certificates"
export const certificatesIntro = "Professional certifications and achievements"

export const certificates: CertificateType[] = [
    {
        title: "Information Systems Specialization",
        issuer: "University of Minnesota (Coursera)",
        date: "Feb 14, 2025",
        image: "/images/certificates/info-systems.png"
    },
    {
        title: "Academic Skills for University Success Specialization",
        issuer: "University of Sydney (Coursera)",
        date: "Feb 14, 2025",
        image: "/images/certificates/academic-skills.png"
    },
    {
        title: "CertNexus Certified Ethical Emerging Technologist",
        issuer: "CertNexus (Coursera)",
        date: "Jun 11, 2025",
        image: "/images/certificates/certnexus.png"
    },
    {
        title: "SQL for Data Science with R",
        issuer: "IBM (Coursera)",
        date: "May 18, 2025",
        image: "/images/certificates/sql-data-science.png"
    },
    {
        title: "Introduction to R Programming for Data Science",
        issuer: "IBM (Coursera)",
        date: "May 23, 2025",
        image: "/images/certificates/r-programming.png"
    },
    {
        title: "Data Visualization with R",
        issuer: "IBM (Coursera)",
        date: "Jul 16, 2025",
        image: "/images/certificates/data-visualization.png"
    },
    {
        title: "Data Analysis with R",
        issuer: "IBM (Coursera)",
        date: "Jun 10, 2025",
        image: "/images/certificates/data-analysis.png"
    }
]
