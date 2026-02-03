export type CertificateType = {
    title: string
    issuer: string
    date: string
    image: string
    verifyUrl?: string
}

export const certificatesHeadLine = "My Certificates"
export const certificatesIntro = "Professional certifications and achievements"

export const certificates: CertificateType[] = [
    {
        title: "Information Systems Specialization",
        issuer: "University of Minnesota (Coursera)",
        date: "Feb 14, 2025",
        image: "/images/certificates/info-systems.png",
        verifyUrl: "https://coursera.org/verify/specialization/QHQSEKUQAE4VMCL6"
    },
    {
        title: "Academic Skills for University Success Specialization",
        issuer: "University of Sydney (Coursera)",
        date: "Feb 14, 2025",
        image: "/images/certificates/academic-skills.png",
        verifyUrl: "https://coursera.org/verify/specialization/J3EMJ46ACNR2KD"
    },
    {
        title: "CertNexus Certified Ethical Emerging Technologist",
        issuer: "CertNexus (Coursera)",
        date: "Jun 11, 2025",
        image: "/images/certificates/certnexus.png",
        verifyUrl: "https://coursera.org/verify/professional-cert/HXQXVGBG7DHSZ"
    },
    {
        title: "SQL for Data Science with R",
        issuer: "IBM (Coursera)",
        date: "May 18, 2025",
        image: "/images/certificates/sql-data-science.png",
        verifyUrl: "https://coursera.org/verify/JRTBMQACGF3FM"
    }
]
