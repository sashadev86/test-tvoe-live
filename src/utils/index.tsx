interface Variants {
  one: string;
  few: string;
  many: string;
  other: string
}

export function pluralMinutes(minutes: number, locale = "ru-RU") {
  const variants: Variants = {
    one: "минута",
    few: "минуты",
    many: "минут",
    other: "минут",
  };

  const key = new Intl.PluralRules(locale).select(minutes) as keyof Variants;
  return variants[key] || "";
}
