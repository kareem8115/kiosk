   interface Husband {
        requestId: number;
        personId: number;
        socialIdTypeId: number;
        socialIdType: string;
        socialId: number;
        firstName: string;
        fatherName: string;
        gfName: string;
        familyName: string;
        fullName: string;
        genderId: number;
        gender: string;
        countryId: number;
        country: string;
        dateOfBirth: Date;
        dateOfBirthHijri: string;
        socialVersionNo: number;
    }

     interface Wife {
        requestId: number;
        personId: number;
        socialIdTypeId: number;
        socialIdType: string;
        socialId: number;
        firstName: string;
        fatherName: string;
        gfName: string;
        familyName: string;
        fullName: string;
        genderId: number;
        gender: string;
        countryId: number;
        country: string;
        dateOfBirth: Date;
        dateOfBirthHijri: string;
        socialVersionNo: number;
    }

     interface Model {
        husband: Husband;
        wife: Wife;
        requestId: number;
        personId: number;
        socialIdTypeId: number;
        socialIdType?: any;
        socialId?: any;
        firstName?: any;
        fatherName?: any;
        gfName?: any;
        familyName?: any;
        fullName?: any;
        genderId: number;
        gender?: any;
        countryId: number;
        country?: any;
        dateOfBirth: Date;
        dateOfBirthHijri?: any;
        socialVersionNo: number;
    }

     interface RequestInfoModel {
        requestId: number;
        requestCode: number;
        judgeId: number;
        judgeName: string;
        deedDate: Date;
        deedDateHijri: string;
        courtId: number;
        courtName: string;
        officeNo: number;
        officeName?: any;
        documentTypeId: number;
        documentTypeName: string;
        documentStatusId: number;
        documentStatusName: string;
        notesList: any[];
        model: Model;
    }

    export interface MarriageModel {
        requestInfoModels: RequestInfoModel[];
    }