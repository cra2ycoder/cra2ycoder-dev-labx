# Regex

### Common Options

- single character (based on OR condition) `[abc]` => opposite `[^abc]`
- character range `[a-b] [A-Z]` => opposite `[^a-b] [^A-Z]` (upper case denotes case specific)
- character range combined `[a-bA-Z]`
- can be any single character `.` (basically all characters)
- alternative `a|b|c`
- only whitespace characters `\s` => opposite `\S` (except whitespace) Note: includes line break too
- any numbers `\d` => `\D` (except numbers)
- any character/word `\w` => opposite `\W`
- optional character (zero or one) `a?`
- additional characters 
  - zero or more `a*`
  - one or more `a+`
- specific lengths
  - only one time `a{1}`
  - only 3 times `a{3}`
  - between `a{1,3}` => min 1 & max 3

---

### Tokens

- at first place `^`
- at last place `$`
- between words `\b` => opposite `\B` (except boundary words)
- start of a string `\A`
- end of a string `\z` => abosolute `\Z`
- group of words `(...)`

## Flags/Modifiers

- global `/g`
- multiline `/m`
- case insensitive `/i`

example: (all together) => `/gmi, /g, /gi, /i, /m`