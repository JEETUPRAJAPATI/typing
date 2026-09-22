import React from 'react';
import {
  HomeIcon,
  KeyboardIcon,
  PenLineIcon,
  PlayCircleIcon,
  TrophyIcon,
  BarChart3Icon,
  GaugeIcon,
  FileTextIcon,
  CrownIcon,
  HelpCircleIcon,
  ClipboardListIcon,
  UsersIcon,
  LayersIcon,
  MonitorIcon,
  TypeIcon,
  DatabaseIcon,
  WalletIcon,
  SettingsIcon,
  GraduationCapIcon } from
'lucide-react';

const map = {
  home: HomeIcon,
  keyboard: KeyboardIcon,
  penLine: PenLineIcon,
  play: PlayCircleIcon,
  trophy: TrophyIcon,
  barChart: BarChart3Icon,
  gauge: GaugeIcon,
  file: FileTextIcon,
  crown: CrownIcon,
  help: HelpCircleIcon,
  clipboard: ClipboardListIcon,
  users: UsersIcon,
  layers: LayersIcon,
  monitor: MonitorIcon,
  type: TypeIcon,
  database: DatabaseIcon,
  wallet: WalletIcon,
  settings: SettingsIcon,
  graduationCap: GraduationCapIcon
} as const;

interface NavIconProps {
  name: string;
  className?: string;
}

export function NavIcon({ name, className = 'h-4 w-4' }: NavIconProps) {
  const Cmp = map[name as keyof typeof map] ?? HomeIcon;
  return <Cmp className={className} aria-hidden="true" />;
}