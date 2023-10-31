import { Component, OnInit } from '@angular/core';
import { checklistItem } from 'src/model/checklistItem';
import { ChecklistServiceService } from 'src/app/services/checklist-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
})
export class ChecklistComponent implements OnInit {
  private service: ChecklistServiceService = new ChecklistServiceService();
  itemsList: Array<checklistItem> = [];
  public taxaAderencia: number | null = null;
  public novoItem: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.itemsList = this.service.getItems();
    this.calcularAderencia();
  }

  public toogleChecked(index: number) {
    this.itemsList[index].resultado == !this.itemsList[index].resultado;
  }

  public setResultado(id: string) {
    const itemToUpdate = this.itemsList.find((i) => i.id === id);

    if (itemToUpdate) {
      itemToUpdate.resultado = !itemToUpdate.resultado;
    }
    if (itemToUpdate?.resultado == false && itemToUpdate.prioridade == '') {
      this.router.navigate([`/seeItemDetails/${itemToUpdate.id}`]);
    }
    this.calcularAderencia();
    this.saveToLocalStorage();
  }

  public adicionarNovoItem() {
    const id = new Date().getTime().toString();
    const obj: checklistItem = {
      id: id,
      item: this.novoItem,
      observacoes: '',
      resultado: false,
      responsavel: '',
      prioridade: ''
    };
    this.itemsList.push(obj);
    this.saveToLocalStorage();
    this.novoItem = '';
    this.calcularAderencia();
  }

  public saveToLocalStorage() {
    this.itemsList.sort((a, b) =>
      a.resultado === b.resultado ? 0 : a.resultado ? 1 : -1
    );
    localStorage.setItem('list', JSON.stringify(this.itemsList));
  }

  public calcularAderencia() {
    let total = this.itemsList.length;
    let sim = 0;
    this.itemsList.forEach((i) => {
      if (i.resultado == true) {
        sim += 1;
      }
    });
    if (sim > 0 && total > 0) {
      this.taxaAderencia = (sim / total) * 100;
    } else {
      this.taxaAderencia = 0;
    }
  }

  public removerItem(id: string) {
    const confirm = window.confirm('Tem certeza que deseja excluir o item? ');
    if (confirm) {
      const index = this.itemsList.findIndex((item) => item.id === id);

      if (index !== -1) {
        this.itemsList.splice(index, 1);
        this.saveToLocalStorage();
        this.calcularAderencia();
      }
    }
  }
}
