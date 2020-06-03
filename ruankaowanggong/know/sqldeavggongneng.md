[toc]

# SQL的AVG功能

## 功能

`AVG`函数返回数值列的平均值。

**注意**

- NULL 值不包括在计算中，即会跳过NULL值。

## 语法

```sql
SELECT AVG(列名称) FROM 表名称
```

## 示例

已经有表Orders：

| O_Id | OrderDate  | OrderPrice | Customer |
| :--- | :--------- | :--------- | :------- |
| 1    | 2008/12/29 | 1000       | Bush     |
| 2    | 2008/11/23 | 1600       | Carter   |
| 3    | 2008/10/05 | 700        | Bush     |
| 4    | 2008/09/28 | 300        | Bush     |
| 5    | 2008/08/06 | 2000       | Adams    |
| 6    | 2008/07/21 | 100        | Carter   |

查询要求，计算 "OrderPrice" 字段的平均值：

```sql
SELECT AVG(OrderPrice) AS OrderAverage FROM Orders
```

| OrderAverage |
| :----------- |
| 950          |

