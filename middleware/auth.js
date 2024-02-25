export default async function ({ store, redirect, req }) {
  if (!store.state.user.loggedIn) return redirect("/");
  return Promise.resolve();
}
