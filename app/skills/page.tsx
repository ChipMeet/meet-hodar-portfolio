import type { Metadata } from 'next'
import { SectionHeader } from '@/components/SectionHeader'
import { SkillRings } from '@/components/SkillRings'
import { SkillCard } from '@/components/SkillCard'
import {
  SiPython,
  SiDocker,
  SiGit,
  SiJupyter,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiLinux,
  SiC
} from 'react-icons/si'
import { LuDatabase } from 'react-icons/lu'
import { TbWaveSine } from 'react-icons/tb'

// ✅ This block must stay right after imports
export const metadata: Metadata = {
  title: 'Skills',
  description: 'Explore Meet Hodar’s skillset across hardware design, tooling, and collaboration.'
}

// ⬇ Then your main SkillsPage function (and all JSX) comes here
export default function SkillsPage() {
  return (
    <div>
      {/* your page content */}
    </div>
  )
}
