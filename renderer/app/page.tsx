'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import SkillCard from '@/components/skill-card'

type Skill = {
  id: string
  imageSrc: string
  title: string
  description: string
  checked: boolean
}

function IndexPage() {
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
    <div className="grid h-dvh w-full bg-white md:grid-cols-2">
      <section className="flex size-full items-center justify-center">
        <section className="w-full max-w-[424px] max-lg:px-4">
          <Image
            src="/assets/clawpilot-logo.svg"
            alt="ClawPilot preview"
            className="mb-[56px]"
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

          <div className="mt-[195px] flex flex-col gap-4">
            <button className="w-full text-center text-base font-medium leading-6 text-[#1D1F25]">
              Skip for now
            </button>
            <button className="inline-flex h-[48px] w-full items-center justify-center rounded-[15.7px] bg-[#1D1F25] px-6 py-2.5 text-base font-medium leading-6 text-white shadow-sm">
              Continue
            </button>
          </div>
        </section>
      </section>

      <section className="relative hidden h-full flex-1 bg-sky-300 md:block">
        <Image
          src="/assets/bg-sky.png"
          alt="ClawPilot preview"
          layout="responsive"
          width={864}
          height={1046}
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
        />
        <Image
          src="/assets/bg-inner.png"
          alt="ClawPilot preview"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-xl:px-10"
          width={560}
          height={736}
          priority
        />
      </section>
    </div>
  )
}

export default IndexPage
