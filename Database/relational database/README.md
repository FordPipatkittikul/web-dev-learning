# relational database

# SQL query

### CREATE TABLE
CREATE TABLE *tablename* (*column1name* *datatype*, *column2name* *datatype*, *column3name* *datatype*)  : create a table.

### SELECT
SELECT * FROM *tablename*;  : select all columns from the  table.

SELECT *column1,column2* FROM *tablename*;  : select all column1,column2 from the table.


### INSERT INTO
INSERT INTO *tablename* (*column1name*, *column2name*, *column3name*) VALUES (*value_1*, *value_2*, *value_3*),(*value_4*, *value_5*, *value_6*); : inserting data into table.

**Note** have to use '' for string value data type

### ALTER TABLE
ALTER TABLE *tablename* ADD *newcolumnname* *datatype*; : create new column in table.

### UPDATE
UPDATE *tablename* SET *columnname* = *value* WHERE *columnname* = *value*;

GUIDE: https://www.w3schools.com/sql/sql_update.aspv

### DELETE
DELETE FROM *tablename* WHERE *columnname* = *value*;  : Delete specific column from table.

DROP TABLE *tablename*; : delete table.

### OR

### AND

### some conditions
SELECT * FROM *tablename* WHERE *column* LIKE 'A%';  : select all from table where the value of that column start with A letter.

SELECT * FROM *tablename* ORDER BY *column* DESC; :  select all from table where the value of that column start from highest to lowest.

SELECT * FROM *tablename* ORDER BY *column* ASC; :  select all from table where the value of that column start from lowest to highest.

### some Functions
SELECT AVG(*column*) FROM *tablename*;
- SUM()
- COUNT()


# postgresql

## basic command

psql -U <user> : set up user.

CREATE DATABASE *databasename*; : create database.

-d : specifies the name of the database to connect to.
-U : specifies the name of the user to connect as.

\c *databasename*;  : move to specific database.

\l : list all databases.

\dt  : display table.

\q : exit.

**Guide**: https://hasura.io/blog/top-psql-commands-and-flags-you-need-to-know-postgresql


## data types
**Guide**: https://www.tutorialspoint.com/postgresql/postgresql_data_types.htm
