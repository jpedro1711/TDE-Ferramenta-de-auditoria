import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { checklistItem } from 'src/model/checklistItem';
import { ChecklistComponent } from '../checklist/checklist.component';
import { ChecklistServiceService } from 'src/app/services/checklist-service.service';
@Component({
  selector: 'app-checklist-details',
  templateUrl: './checklist-details.component.html',
  styleUrls: ['./checklist-details.component.css'],
})
export class ChecklistDetailsComponent implements OnInit {
  private service: ChecklistServiceService = new ChecklistServiceService();
  public itemsList: Array<checklistItem> = [];
  public item: checklistItem | null = null;
  constructor(private route: ActivatedRoute, private router: Router) {}

  public observacoes: string | null | undefined = this.item?.observacoes;
  public prioridade: string | null | undefined = this.item?.prioridade;
  public responsavel: string | null | undefined = this.item?.responsavel;
  public resultado: boolean | null | undefined = this.item?.resultado;

  ngOnInit(): void {
    this.itemsList = this.service.getItems();
    this.getItemDetails();
  }

  getItemDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    const result = this.itemsList.find((i) => i.id == id);
    if (result != null) {
      this.item = result;
      this.resultado = this.item.resultado;
    }
  }

  salvarItem(item: checklistItem) {
    if (item.resultado != null) {
      const resultado: string = item.resultado.toString();
      if (resultado == 'false') {
        item.resultado = false;
      } else {
        item.resultado = true;
      }
    }
    if (
      item.resultado == false &&
      (item.prioridade == '' || item.responsavel == '')
    ) {
      alert(
        'Se o item não está em conformidade, defina uma prioridade e responsável'
      );
    } else {
      localStorage.setItem('list', JSON.stringify(this.itemsList));
      this.router.navigate(['/']);
    }
  }

  verificarItem(item: checklistItem) {
    if (
      item.resultado == false &&
      (item.prioridade == '' || item.responsavel == '')
    ) {
      alert(
        'Se o item não está em conformidade, defina uma prioridade e responsável'
      );
    } else {
      item.resultado = true;
      localStorage.setItem('list', JSON.stringify(this.itemsList));
      this.router.navigate(['/']);
    }
  }
}
