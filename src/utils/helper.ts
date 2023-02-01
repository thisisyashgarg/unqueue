export function handleChange(setFunction) {
  const { name, value } = event.target;
  setFunction((prev) => {
    return {
      ...prev,
      [name]: value,
    };
  });
}
