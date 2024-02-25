export default async function ({ store, redirect, req }) {
  if (!store.state.user.loggedIn) return redirect("/login");
  return Promise.resolve();
}
