function defineSkill<const Name extends string>(name: Name) {
  const skillsSubDir = "icons";
  const filename = name.toLowerCase().replace(" ", "-");

  return {
    name,
    i18nKey: filename,
    icon: `${skillsSubDir}/${filename}` as const,
  };
}

export const skills = [
  defineSkill("AWS"),
  defineSkill("JavaScript"),
  defineSkill("TypeScript"),
  defineSkill("CSS"),
  defineSkill("PHP"),
  defineSkill("React Native"),
  defineSkill("React"),
  defineSkill("Next.js"),
  defineSkill("NodeJS"),
  defineSkill("Astro"),
  defineSkill("TailwindCSS"),
  defineSkill("MySQL"),
  defineSkill("Github"),
  defineSkill("Git"),
  defineSkill("Docker"),
  defineSkill("Communication"),
  defineSkill("Analytical Thinking"),
  defineSkill("Teamwork"),
  defineSkill("azure"),
  defineSkill("gitlab"),
  defineSkill("jest"),
  defineSkill("redux"),
  defineSkill("postgressql"),
] as const;

/** The list with all the skill names. */
export type SkillName = (typeof skills)[number]["name"];
