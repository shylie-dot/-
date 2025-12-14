export enum TreeState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE'
}

export interface ParticleData {
  id: number;
  // Position in the conical tree form
  treePos: [number, number, number];
  // Position in the chaotic cloud
  scatterPos: [number, number, number];
  // Base rotation
  rotation: [number, number, number];
  // Scale variation
  scale: number;
  // Animation speed offset
  speed: number;
}
