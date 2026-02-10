'use client'

import Image from 'next/image'
import React from 'react'

type SkillCardProps = {
  imageSrc: string
  title: string
  description: string
  checked?: boolean
  onChange?: () => void
}

export default function SkillCard({
  imageSrc,
  title,
  description,
  checked = false,
  onChange
}: SkillCardProps) {
  return (
    <button
      type="button"
      className="flex h-auto w-full items-start justify-between rounded-[15.7px] border border-[#00105012] p-3 text-left md:h-[88px]"
      onClick={onChange}>
      <div className="flex items-center gap-4">
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

      <span
        className="inline-flex h-4 w-5 items-center justify-center rounded-[6.8px] border border-[#00105012] bg-white"
        onClick={e => {
          e.stopPropagation()
          onChange?.()
        }}>
        {checked && <span className="size-2 rounded-[3px] bg-[#1D1F25]" />}
      </span>
    </button>
  )
}

