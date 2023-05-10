export const scrollToId = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};
