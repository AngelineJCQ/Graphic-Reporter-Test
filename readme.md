# Task 1 
## The information that I learned from the csv file
- TX high schools basic info: name, school district, enrollment
- The year that each school won the UIL championship → total number of championships in the school history
- Future plan in 2032: More school? Student number projection? New campus?

## The things I am curious to know more about
1. High schools in general
- Is the number of championships related to the enrollment? The assumption to test is that more students means higher chances of teaming up good young athletes. 
- Is the number of championships related to the demographic of the school district/neighborhood? The assumption to test is that the schools in those neighborhoods with higher income, larger population, more family households have higher chances to win.
- Is the number of championships related to the resources of the school? The assumption to test is that the schools with better infrastructure, more money spent on the coach/sport team/facility have higher chances to win.

2. Schools that won multiple times (would be interesting to pick some schools)
- Is the year that the school won the championship related to some factors? Like mentioned above, enrollment, the neighborhood demographics, at those certain years

3. Football players graduating from those high schools
- Do the high schools which have won many championships send more future professional players to the college? 

4. Future plans
- Based on 2032 high student number projection, which area needs new high schools most? (the gap between future number projection and current capacity)

## The datasets I propose to join if they exist
- 2010 and 2020 Census Data: median income, household number, age 
- Some schools’ historical enrollment data
- Areas of football pitch, the expenses on team training, the football coach salary, of each school 
- The UIL classification of each school (6A through 1A)
- The National Football League database: players from TX, their high school, their performance in UIL
- The address of each school → really want to know geographical distribution


# Task 2/3
## Visual ideas based on the info I got:
### A scatterplot of enrollment and UIL championship totals
- Pros: can see the relationship between two variables （but need to test the assumption with more quantitative methods like modeling)
- Cons: hard for average audience to understand so I add a scroollytelling to break it down into different steps
- What can be improved: use different colors to identify classifications if the category data is available
- link [here](https://angelinejcq.github.io/Graphic-Reporter-Test)
### A heat map showing the aggregated enrollment number and projection number in each school district
merge process:
1. Use QGIS to convert .shp to .geojson
2. Use geopandas to read [districts.geojson](https://github.com/AngelineJCQ/Graphic-Reporter-Test/blob/main/districts.geojson) file
3. Use json.loads to read the json file
4. Use for-loop to collect the info I'm interested in and combine them into a datafrane
4. Merge two dataframes
5. Export the merged result to [merged.geojson](https://github.com/AngelineJCQ/Graphic-Reporter-Test/blob/main/merged.geojson)
- [jupyter notebook](https://github.com/AngelineJCQ/Graphic-Reporter-Test/blob/main/Data%20Analysis.ipynb) Geo Data Part
Note: the notebook also includes process of viz exploration and pre-analysis
- [combined file](https://github.com/AngelineJCQ/Graphic-Reporter-Test/blob/main/merged.geojson)


# Task 4
Note: The following is to show different ways to explore the issue. They are not necessarily in one story, unless it’s a BIG project.
## Dataset:
1. The median rent/housing price in that area compared to other parts of the city
2. The buyout agreement dataset (SF for example) → talk to several residents and ask for before/after buyout rent; where will they move to; if they try to form a union to talk to the landlord
3. The percentage of large chain stores and local businesses
4. The percentage of racial and ethnic minority house owners 

## Visual:
1. Identify 2-3 main characters (resident, tenant, landlord, small business owner)
2. Profile photo + anecdote story: their own experience and feeling about the areas
3. Transition from photo/individual story to a dot, and put it in a cluster of dots to show they are not the only ones claiming those problems, eg. building being buyout, force eviction, the take over of large chain stores
4. Show the change from the graphics
- a line chart to see the change of the rent in this area (highlighted) and other parts of the city over years
- map of all the buyout buildings 
- use different colors to mark the type of businesses in a map with a adjustable bar where readers can see the change  in different years




