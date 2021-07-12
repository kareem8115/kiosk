import http from "../http-common";

class InformationService {
     getDeed(id: number, year: number, month: number, day: number): Promise<any> {
        var path = `/Information/GetDeed?id=${id}&year=${year}&month=${month}&day=${day}`;
        var response =  http.get(path);
        return response;
    }

    GetDeedShamil(deedId: string, ownerId: string) {
        return http.get(`/Information/GetDeedShamil?deedId=${deedId}&ownerId=${ownerId}`);
    }
    GetMorasalat(number: string, year: string) {
        return http.get(`/Information/GetMorasalat?number=${number}&year=${year}`);
    }

    GetInhaatDeed(id: string, socialId: string) {
        return http.get(`/Information/GetInhaatDeed?id=${id}&socialId=${socialId}`);
    }

    GetJuridicalInquiry(identityNumber: string, personType: string) {
        return http.get(`/Information/GetJuridicalInquiry?identityNumber=${identityNumber}`);
    }

    GetJuridicalValidate(licenseNumber: string, licenseTypeId: string) {
        return http.get(`/Information/GetJuridicalValidate?licenseNumber=${licenseNumber}&licenseTypeId=${licenseTypeId}`);
    }
    GetAttorney(attorneyNumber: string, nationalId: string) {
        return http.get(`/Information/GetAttorney?AttornyNumber=${attorneyNumber}&NationalNumber=${nationalId}&Key=kXmbp2MmX1YFW1Yuz4A5pTA3vFfGXE2g`);
    }
    GetMarriage(contractNumber: string, nationalId: string) {
        return http.get(`/Information/GetMarriage?ContractNumber=${contractNumber}&NationalId=${nationalId}`);
    }
    GetAdmission(admissionNumber: string, nationalId: string) {
        return http.get(`/Information/GetAdmission?AdmissionNumber=${admissionNumber}&NationalId=${nationalId}&Token=kXmbp2MmX1YFW1Yuz4A5pTA3vFfGXE2g`);
    }

    GetFurijat(billNumber: string) {
        return http.get(`/Information/GetFurjatBill?billNumber=${billNumber}`);
    }
    
 
}

export default new InformationService();