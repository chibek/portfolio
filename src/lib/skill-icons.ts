import type { Icon } from "virtual:astro-icon";

function defineSkill<const Name extends string>(name: Name) {
  const filename = name.toLowerCase().replace(" ", "-");
  return {
    name,
    i18nKey: filename,
    icon: `${filename}` as Icon,
  };
}

export const skills = [
  defineSkill("aws"),
  defineSkill("javascript"),
  defineSkill("typescript"),
  defineSkill("css"),
  defineSkill("php"),
  defineSkill("react"),
  defineSkill("nextjs"),
  defineSkill("nodejs"),
  defineSkill("astro"),
  defineSkill("tailwindcss"),
  defineSkill("mysql"),
  defineSkill("git"),
  defineSkill("docker"),
  defineSkill("communication"),
  defineSkill("analytical thinking"),
  defineSkill("teamwork"),
  defineSkill("azure"),
  defineSkill("gitlab"),
  defineSkill("jest"),
  defineSkill("redux"),
  defineSkill("postgressql"),
  defineSkill("express"),
  defineSkill("html"),
  defineSkill("scrum"),
  defineSkill("adaptability"),
  defineSkill("elixir"),
  defineSkill("phoenix"),
  defineSkill("vue"),
] as const;

export type SkillName = (typeof skills)[number]["name"];
