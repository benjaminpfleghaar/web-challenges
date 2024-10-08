export function getAnimal(animal) {
  if (animal === "cats") return "I totally love cats!";
  if (animal) return "I like " + animal + "!";
  if (animal === undefined) return "I do not like animals at all!";
}
