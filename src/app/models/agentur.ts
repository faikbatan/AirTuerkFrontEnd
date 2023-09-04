export class Agentur {
  name: string;
  strasse: string;
  plz: string;
  ort: string;
  tel: string;
  fax: string;
  land: string;
  ansprechPerson: string;
  email: string;
  waehrung: string;
  kreditLimit: number;
  offen: number;
  verfuegbar: number;
  guthaben: number;
  _Id: number;
  _Key: string;

  /**
   *
   */
  constructor(
    _Name: string,
    _Strasse: string,
    _PLZ: string,
    _Ort: string,
    _Tel: string,
    _Fax: string,
    _Land: string,
    _AnsprechPerson: string,
    _Email: string,
    _Waehrung: string,
    _KreditLimit: number,
    _Offen: number,
    _Verfuegbar: number,
    _Guthaben: number,
    Key: string,
    Id: number
  ) {
    this.name = _Name;
    this.strasse = _Strasse;
    this.plz = _PLZ;
    this.ort = _Ort;
    this.tel = _Tel;
    this.fax = _Fax;
    this.land = _Land;
    this.ansprechPerson = _AnsprechPerson;
    this.email = _Email;
    this.waehrung = _Waehrung;
    this.kreditLimit = _KreditLimit;
    this.offen = _Offen;
    this.verfuegbar = _Verfuegbar;
    this.guthaben = _Guthaben;
    this._Key = Key;
    this._Id = Id;
  }
}
