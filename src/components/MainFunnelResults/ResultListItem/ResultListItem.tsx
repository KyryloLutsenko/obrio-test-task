import { StyledKey, StyledListItem, StyledValue } from './ResultListItem.styles';

type ResultListItemProps = {
  formattedKey: string;
  value: string;
};

const ResultListItem = ({ formattedKey, value }: ResultListItemProps) => (
  <StyledListItem>
    <StyledKey>{formattedKey}:</StyledKey>
    <StyledValue variant="body1">{value}</StyledValue>
  </StyledListItem>
);

export default ResultListItem;
