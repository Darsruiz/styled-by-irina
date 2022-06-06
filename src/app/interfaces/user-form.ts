import { IMergeFields } from "./merge-fields";

export interface IUserForm {
    email_address: string;
    merge_fields?: IMergeFields;
    status: string;
    tags: string[];
}

