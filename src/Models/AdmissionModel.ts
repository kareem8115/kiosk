import { GeneralModel } from './GeneralModel';
export interface AdmissionModel extends GeneralModel {
    Id: number;
    Code: number;
    PlaceId: number;
    PlaceName: string;
    StatusId: number;
    StatusName: string;
    Validity: string;
    IssueGregDate: Date;
    IssueHijriDate: string;
    TypeId: number;
    TypeName: string;
    PartyTypeId: number;
    PartyTypeName: null;
    Notes: null;
    Key: null;
    Pattern: string;
    EndGregDate: Date;
    EndHijriDate: string;
    ConfirmedByName: null;
    ConfirmedByRole: null;
    ConfirmedByRoleForSignature: null;
    Clauses: null;
}
