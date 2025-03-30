public int sumPath(int row, int col)
{
    int sum = grid[row][col];
    Location loc = getNextLoc(row, col);
    
    while(loc != null)
    {
        sum += grid[loc.getRow()][loc.getCol()];
        
        if(loc.getRow() < grid.length - 1 ||
                loc.getCol() < grid[0].length - 1)
            loc = getNextLoc(loc.getRow(), loc.getCol());
        else
            loc = null;
    }
    
    return sum;
}
