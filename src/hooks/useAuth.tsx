import { useAppSelector } from "@/app/store";

export default function useAuth() {
  const { user, token, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );
  return { user, token, isAuthenticated };
}
