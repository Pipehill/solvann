export class GroupState {
  groupName: string;
  money: number;
  waterLevel: number;
  environmentCost: number;

  constructor(groupName: string, money: number, waterLevel: number, environmentCost: number) {
    this.groupName = groupName;
    this.money = money;
    this.waterLevel = waterLevel;
    this.environmentCost = environmentCost;
  }
}
