export class Vorgang {
  VorgangId: string;
  ReisePreis: number;
  ReisAnmelder: string;
  AgenturId: string;
  UnterAgenturVon: string;
  KontiBuchung: string;
  FlugPreis: number;
  Provision: number;
  Tax: number;
  Gezahlt: number;
  Offen: number;
  Waehrung: string;
  UmrechnungsWaehrung: string;
  UmrechnungsKurs: number;
  Storniert: number;
  Von: string;
  Nach: string;
  Pax: number;
  ReferenzVorgang: string;
  BuchungsDatum: string;
  ReiseBeginn: string;
  ReiseEnde: string;
  UhrZeit: string;
  Zuschlag: string;

  /**
   *
   */
  constructor(
    vorgangId: string = '',
    reisePreis: number = 0,
    reisAnmelder: string = '',
    agenturId: string = '',
    unterAgenturVon: string = '',
    kontiBuchung: string = '',
    flugPreis: number = 0,
    provision: number = 0,
    tax: number = 0,
    gezahlt: number = 0,
    offen: number = 0,
    waehrung: string = '',
    umrechnungsWaehrung: string = '',
    umrechnungsKurs: number = 0,
    storniert: number = 0,
    von: string = '',
    nach: string = '',
    pax: number = 0,
    referenzVorgang: string = '',
    buchungsDatum: string = '',
    reiseBeginn: string = '',
    reiseEnde: string = '',
    uhrZeit: string = '',
    zuschlag: string = ''
  ) {
    this.VorgangId = vorgangId;
    this.ReisePreis = reisePreis;
    this.ReisAnmelder = reisAnmelder;
    this.AgenturId = agenturId;
    this.UnterAgenturVon = unterAgenturVon;
    this.KontiBuchung = kontiBuchung;
    this.FlugPreis = flugPreis;
    this.Provision = provision;
    this.Tax = tax;
    this.Gezahlt = gezahlt;
    this.Offen = offen;
    this.Waehrung = waehrung;
    this.UmrechnungsWaehrung = umrechnungsWaehrung;
    this.UmrechnungsKurs = umrechnungsKurs;
    this.Storniert = storniert;
    this.Von = von;
    this.Nach = nach;
    this.Pax = pax;
    this.ReferenzVorgang = referenzVorgang;
    this.BuchungsDatum = buchungsDatum;
    this.ReiseBeginn = reiseBeginn;
    this.ReiseEnde = reiseEnde;
    this.UhrZeit = uhrZeit;
    this.Zuschlag = zuschlag;
  }
}
