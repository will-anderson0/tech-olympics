public Location getNextLoc(int row, int col)
{
    Location belowLoc = new Location(row + 1, col);
    Location rightLoc = new Location(row, col + 1);
    
    if(row == grid.length - 1)
        return rightLoc;
    
    if(col == grid[0].length - 1)
        return belowLoc;
    
    if(grid[row + 1][col] < grid[row][col + 1])
        return belowLoc;
    else
        return rightLoc;
}
