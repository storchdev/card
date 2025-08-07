function calculateAge() {
  // Warning this function is AI
  const birthday = new Date(1178510400000);
  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();

  // Check if birthday has not occurred yet this year
  const hasHadBirthdayThisYear =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDate() >= birthday.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age.toString();
}

window.addEventListener("DOMContentLoaded", () => {
  let e = document.getElementById("age");
  e.textContent = calculateAge();
});
