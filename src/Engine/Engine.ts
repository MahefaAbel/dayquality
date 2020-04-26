import moment from "moment"

export default class Engine {

  public static convertToMalagasyName(year: number, mounth: number, day: number) {
    const diffDays = this.getDiffsDate(year, mounth, day);
    const moduloted = diffDays % 28
    const anaranaAndro = this.getDateNameMalagasy(moduloted)
    return `${diffDays} ${moduloted} ${anaranaAndro}`
  }

  public static getDiffsDate(year: number, mounth: number, day: number) {
    const dateWantedMoment = moment(`${day}/${mounth}/${year}`,'D/M/YYYY');

    const dateReferenceFirstStr = this.getFirstDateReference()  // Exemple : 2019-07-22
    const dateReferenceMoment = moment(`${dateReferenceFirstStr}`,'YYYY-M-D');

    const diffDays = dateWantedMoment.diff(dateReferenceMoment, 'days');

    return diffDays
  }

  public static getFirstDateReference() {
    let result = null;
    const keys = Object.keys(AnaranandroMalagasy)
    if(keys.length > 0){
        result = keys[0]
    }
    return result
  }

  public static getDateNameMalagasy(modulo: number) {
    let result = null;
    const values = Object.values(AnaranandroMalagasy)
    if(values.length > 0){
        result = values[modulo]
    }
    return result
  }

}

const AnaranandroMalagasy = {
    "2019-07-22": "Lohalakaosy",
    "2019-07-23": "Tsidina",
    "2019-07-24": "Ranomaso",
    "2019-07-25": "Tratrany",
    "2019-07-26": "Sandramody",
    "2019-07-27": "Adalomanara",
    "2019-07-28": "Faradalo",
    "2019-07-29": "Lohalohotsy",
    "2019-07-30": "Faralohotsy",
    "2019-07-31": "Vavalamadina",
    "2019-08-01": "Handrona",
    "2019-08-02": "Soria",
    "2019-08-03": "Adaorovokatra",
    "2019-08-04": "Faralahaka",
    "2019-08-05": "Ravina",
    "2019-08-06": "Vahany",
    "2019-08-07": "Vavasorotany",
    "2019-08-08": "Kokony",
    "2019-08-09": "Hifiny",
    "2019-08-10": "Alasata",
    "2019-08-11": "Haravoana",
    "2019-08-12": "Soambola",
    "2019-08-13": "Alaova",
    "2019-08-14": "Alakaforo",
    "2019-08-15": "Admizana",
    "2019-08-16": "Kididy",
    "2019-08-17": "Alakarabo",
    "2019-08-18": "Fanagnorena"
}