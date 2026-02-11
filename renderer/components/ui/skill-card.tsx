'use client'

import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'

type SkillCardProps = {
  imageSrc: string
  title: string
  description: string
  checked?: boolean
  onChange?: () => void
  className?: string
  isChecked?: boolean
}

export default function SkillCard({
  imageSrc,
  title,
  description,
  checked = false,
  onChange,
  className = '',
  isChecked = true
}: SkillCardProps) {
  return (
    <button
      type="button"
      className={cn(
        'flex h-auto w-full items-start justify-between rounded-2xl border p-3 text-left md:h-[88px]',
        checked ? 'border-black/60' : 'border-[#00105012]',
        className
      )}
      onClick={e => {
        e.stopPropagation()
        if (checked) return
        onChange?.()
      }}>
      <div className="flex items-center gap-3 xl:gap-4">
        <Image
          src={imageSrc}
          alt={title}
          width={64}
          height={64}
        />
        <div>
          <p className="text-base font-medium leading-6 text-[#1D1F25]">
            {title}
          </p>
          <p className="text-balance text-sm leading-5 text-[#4B4F5C]">
            {description}
          </p>
        </div>
      </div>

      {isChecked && (
        <span
          className={cn(
            'inline-flex h-4 w-5 items-center justify-center rounded-[6.8px] border bg-white',
            checked ? 'border-[#1D1F25]' : 'border-[#00105012]'
          )}
          onClick={e => {
            e.stopPropagation()
            onChange?.()
          }}>
          {checked && <span className="size-2 rounded-[3px] bg-[#1D1F25]" />}
        </span>
      )}
    </button>
  )
}
