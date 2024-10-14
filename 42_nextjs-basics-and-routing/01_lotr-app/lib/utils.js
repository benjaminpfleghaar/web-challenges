export function generateLinks(index, volumes) {
  const links = [];

  if (volumes[index - 1]) {
    links.push({
      href: "/volumes/" + volumes[index - 1].slug,
      title: "←" + volumes[index - 1].title,
    });
  }
  if (volumes[index + 1]) {
    links.push({
      href: "/volumes/" + volumes[index + 1].slug,
      title: volumes[index + 1].title + "→",
    });
  }

  return links;
}
