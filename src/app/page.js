import { FamilyProvider } from "./context/FamilyContext";
import FamilyPlanPage from "./FamilyPage";

export default function Home() {
  return (
    <FamilyProvider>
    <FamilyPlanPage/></FamilyProvider>
  );
}
