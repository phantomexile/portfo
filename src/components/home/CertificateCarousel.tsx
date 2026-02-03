'use client'

import { useState, useEffect } from 'react'
import { certificates } from '@/config/certificates'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import Image from 'next/image'

export function CertificateCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState<'left' | 'right'>('right')

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection('right')
            setCurrentIndex((prev) => (prev + 1) % certificates.length)
        }, 5000) // Auto-advance every 5 seconds

        return () => clearInterval(timer)
    }, [])

    const goToPrevious = () => {
        setDirection('left')
        setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
    }

    const goToNext = () => {
        setDirection('right')
        setCurrentIndex((prev) => (prev + 1) % certificates.length)
    }

    const currentCert = certificates[currentIndex]

    return (
        <div className="relative w-full">
            <div className="relative bg-muted/5 rounded-2xl border border-muted-foreground/20 overflow-hidden shadow-lg">
                {/* Certificate Image */}
                <div className="relative w-full aspect-[16/11] bg-white overflow-hidden">
                    <div
                        key={currentIndex}
                        className={`absolute inset-0 animate-in fade-in ${direction === 'right' ? 'slide-in-from-right' : 'slide-in-from-left'
                            } duration-500`}
                    >
                        <Image
                            src={currentCert.image}
                            alt={currentCert.title}
                            fill
                            className="object-contain p-4"
                            priority
                        />
                    </div>
                </div>

                {/* Certificate Info */}
                <div
                    key={`info-${currentIndex}`}
                    className="p-6 bg-muted/10 animate-in fade-in slide-in-from-bottom duration-500"
                >
                    <h3 className="text-xl font-semibold mb-2">{currentCert.title}</h3>
                    <p className="text-muted-foreground mb-1">{currentCert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{currentCert.date}</p>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background hover:scale-110 p-2 rounded-full shadow-lg transition-all duration-200"
                    aria-label="Previous certificate"
                >
                    <CaretLeft size={24} weight="bold" />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background hover:scale-110 p-2 rounded-full shadow-lg transition-all duration-200"
                    aria-label="Next certificate"
                >
                    <CaretRight size={24} weight="bold" />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
                {certificates.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 'right' : 'left')
                            setCurrentIndex(index)
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-primary w-8'
                                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
                            }`}
                        aria-label={`Go to certificate ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
