import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
        "profilePic": "assets/img/eventos/ta.png",
        "ti": "Financiando el Cambio: La importancia de la sustentabilidad",
        "de": "Presidente de la Fundación Liderazgo Joven y Director General de RASAVA Group, un grupo de negocios conformado por (CILFORSA, ORGANIQUO, VERDEVENTOS, GLOBAL INSTITUTE FOR STANDARDIZATION y DIVIDENDEE) En CILFORSA. Construcción Sustentable impulsa las construcciones ecológicas hechas con botellas reutilizadas de PET y vidrio.",
        "fe": "05/06/2018",
        "hr": "15:30 Hr",
        "lu": "https://www.google.com.mx/maps/place/Plaza+Del+Carmen/@22.1411427,-100.957812,14z/data=!4m5!3m4!1s0x842aa2023d46c823:0xbe26fec01c497339!8m2!3d22.1512292!4d-100.9742045",
        "co": "$0.00",
        "cn": "4447835462",
        "en": "https://sanluispotosistartupweek2016.sched.com/event/8Dr0/financiando-el-cambio-la-importancia-de-la-sustentabilidad?iframe=no&w=100%&sidebar=yes&bg=no",
        "cl":"assets/img/cl.png",
  };


  constructor() {
    let items = [
      {
        "profilePic": "assets/img/eventos/co.jpg",
        "ti": "Financiando el Cambio: La importancia de la sustentabilidad",
        "de": "Presidente de la Fundación Liderazgo Joven y Director General de RASAVA Group, un grupo de negocios conformado por (CILFORSA, ORGANIQUO, VERDEVENTOS, GLOBAL INSTITUTE FOR STANDARDIZATION y DIVIDENDEE) En CILFORSA. Construcción Sustentable impulsa las construcciones ecológicas hechas con botellas reutilizadas de PET y vidrio.",
        "fe": "05/06/2018",
        "hr": "15:30 Hr",
        "lu": "https://www.google.com.mx/maps/place/Plaza+Del+Carmen/@22.1411427,-100.957812,14z/data=!4m5!3m4!1s0x842aa2023d46c823:0xbe26fec01c497339!8m2!3d22.1512292!4d-100.9742045",
        "co": "$0.00",
        "cn": "4447835462",
        "en": "https://sanluispotosistartupweek2016.sched.com/event/8Dr0/financiando-el-cambio-la-importancia-de-la-sustentabilidad?iframe=no&w=100%&sidebar=yes&bg=no",
        "cl":"assets/img/cl.png"
      },
      {
        "profilePic": "assets/img/eventos/ta.png",
        "ti": "Taller ARDEX - Sesión 2",
        "de": "ARDEX AMERICAS es una empresa de origen alemán, pionera en productos derivados del cemento que han revolucionado la industria de la construcción por su extraordinaria calidad y el costo - beneficio que trae a los contratistas por la alta resistencia de sus productos, rápidos tiempos de secado, fácil preparación y aplicación y sobre todo, por la confianza que inspira la empresa al otorgar garantías sobre proyectos enteros.",
        "fe": "12/06/2018",
        "hr": "12:00 Hr",
        "lu": "https://www.google.com.mx/maps/place/Centro+de+las+Artes+de+San+Lu%C3%ADs+Potos%C3%AD+Centenario/@22.1411427,-100.957812,14z/data=!4m5!3m4!1s0x842aa20fd0863099:0x5351387535ec756f!8m2!3d22.1388273!4d-100.9706211",
        "co": "$149.99",
        "cn": "4447238274",
        "en": "https://sanluispotosistartupweek2016.sched.com/event/8EwF/taller-ardex-sesion-2?iframe=no&w=100%&sidebar=yes&bg=no",
        "cl":"assets/img/cl.png"
      },
      {
        "profilePic": "assets/img/eventos/co.jpg",
        "ti": "Emprendiendo con Innovación ",
        "de": "Conferencia...",
        "fe": "23/06/2018",
        "hr": "17:15 Hr",
        "lu": "https://www.google.com.mx/maps/place/Universidad+Potosina/@22.1492118,-100.9598719,15z/data=!4m5!3m4!1s0x0:0xd079aa952c936f93!8m2!3d22.1486356!4d-100.9714419",
        "co": "$0.00",
        "cn": "4448902341",
        "en": "https://sanluispotosistartupweek2016.sched.com/event/82Ty/emprendiendo-con-innovacion?iframe=no&w=100%&sidebar=yes&bg=no",
        "cl":"assets/img/cl.png"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
