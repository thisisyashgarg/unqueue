import axios from "axios";

export async function postAdminFormData(e, adminForm) {
  e.preventDefault();
  try {
    await axios.post("http://localhost:3000/submit/admin", adminForm);
  } catch (error) {
    console.error(error);
  }
}

export async function postQID(e, QID) {
  e.preventDefault();
  try {
    await axios.post("http://localhost:3000/submit/qid", QID);
  } catch (error) {
    console.error(error);
  }
}

export async function postLoginForm(e, loginForm) {
  e.preventDefault();
  try {
    await axios.post("http://localhost:3000/login", loginForm);
  } catch (error) {
    console.error(error);
  }
}
