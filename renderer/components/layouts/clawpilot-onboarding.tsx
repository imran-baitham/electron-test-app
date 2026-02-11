'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import SkillCard from '@/components/ui/skill-card'
import backgroundImage from '@/public/assets/bg-sky.png'

type Skill = {
  id: string
  imageSrc: string
  title: string
  description: string
  checked: boolean
}

export default function ClawpilotOnboarding() {
  const [skills, setSkills] = useState<Skill[]>([
    {
      id: 'birthday',
      imageSrc: '/assets/blue-skill.png',
      title: 'Birthday bot',
      description: 'Automatically sends greetings when someone has a birthday',
      checked: false
    },
    {
      id: 'standup',
      imageSrc: '/assets/green-skill.png',
      title: 'Standup bot',
      description:
        'Track daily updates and blockers from your team on autopilot',
      checked: false
    }
  ])

  const handleSkillSelect = (id: string) => {
    setSkills(prev =>
      prev.map(skill => ({
        ...skill,
        checked: skill.id === id
      }))
    )
  }

  return (
    <div className="grid h-screen max-h-fit w-full bg-white md:grid-cols-2">
      <section className="flex size-full items-center justify-center">
        <div className="w-full max-w-md max-lg:px-4">
          <Image
            src="/assets/clawpilot-logo.svg"
            alt="ClawPilot preview"
            className="mb-14"
            width={151}
            height={36}
            priority
          />

          <div className="space-y-4">
            <h1 className="text-xl font-semibold leading-8 tracking-[-0.2px] text-slate-900 md:text-2xl">
              Kick things off with ClawPilot skills
            </h1>
            <div className="space-y-5 text-sm text-[#1D1F25] md:text-base">
              <p className="leading-6">
                Turn on prebuilt abilities to get moving faster, or start from a
                clean slate and shape everything your own way.
              </p>
              <p className="leading-6">
                You can add, remove, or write new skills and instructions
                anytime as your setup evolves.
              </p>
            </div>
          </div>

          <hr className="my-7 border border-[#00105012]" />

          <div className="space-y-4">
            {skills.map(skill => (
              <SkillCard
                key={skill.id}
                imageSrc={skill.imageSrc}
                title={skill.title}
                description={skill.description}
                checked={skill.checked}
                onChange={() => handleSkillSelect(skill.id)}
              />
            ))}
          </div>

          <div className="mt-48 flex flex-col gap-4">
            <button className="w-full text-center text-base font-medium leading-6 text-[#1D1F25]">
              Skip for now
            </button>
            <button className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-[#1D1F25] px-6 py-2.5 text-base font-medium leading-6 text-white shadow-sm">
              Continue
            </button>
          </div>
        </div>
      </section>

      <section className="relative hidden h-full flex-1 overflow-hidden bg-sky-300 md:block">
        <Image
          src={backgroundImage}
          alt="ClawPilot preview"
          className="size-full object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 max-xl:px-10">
          <Image
            src="/assets/background-inner.svg"
            alt="ClawPilot preview"
            width={560}
            height={632}
            priority
          />
          <div>
            {skills.slice(0, 1).map(skill => (
              <SkillCard
                key={skill.id}
                isChecked={false}
                className="mx-auto max-w-[344px] cursor-default bg-white"
                imageSrc={skill.imageSrc}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
