import { MedicationProps } from "../../components/Medication/Medication";

export interface IMedication {
  title: string;
  image: string;
  category: string[];
  prospect: string;
  description: string[];
  uses: string[];
  dosis: string;
  id: string;
}

export interface MedicationListProps {
  medication: MedicationProps;
}

export interface MedicationList {
  medication: IMedication[];
}
export type MedicationState = IMedication[];