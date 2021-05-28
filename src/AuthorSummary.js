import {authorInformation} from "./helpers";
const AuthorSummary = ({authorName, listCount}) =>authorName ? authorInformation(listCount) : null;

export {AuthorSummary};
