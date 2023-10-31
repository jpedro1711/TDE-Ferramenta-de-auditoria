export interface checklistItem {
  id: string;
  item: string;
  resultado: boolean | null;
  responsavel: string | null;
  prioridade: string | null;
  observacoes: string | null;
}
