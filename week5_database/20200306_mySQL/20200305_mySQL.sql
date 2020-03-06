use boatrental;

# exercise1
select distinct sailors.sname, age from sailors;

# exercise2
select distinct s.sname from sailors s left join reserves r on r.sid = s.sid where r.bid = 103;
select distinct s.sname from sailors s, reserves r where s.sid = r.sid and r.bid = 103;

# exercise3
select distinct r.sid from boats b left join reserves r on b.bid = r.bid where color = "red";
select distinct r.sid from boats, reserves where boats.bid = reserves.bid and color = "red";

# exercise4
select s.sname from sailors s, reserves r, boats b where b.bid = r.bid and r.sid = s.sid and color = "red";
select s.sname from sailors s inner join  reserves r inner join boats b where b.bid = r.bid and r.sid = s.sid and color = "red";

# exercise5
select b.color from boats b, reserves r, sailors s where b.bid = r.bid and r.sid = s.sid and sname = "Lubber";
select b.color from boats b inner join reserves r inner join sailors s on b.bid = r.bid and r.sid = s.sid where sname = "Lubber";

# exercise6
select distinct s.sname from sailors s right join reserves r on s.sid = r.sid and s.sid = r.sid;
# in case of getting Horatio id 64 & 74
select s.sname from sailors s where s.sid 
in 
(select s.sid from sailors s right join reserves r on s.sid = r.sid and s.sid = r.sid);


# exercise 7
select s.sname from sailors s where
s.sname in
# id reserves red boats
(select s.sname from sailors s, reserves r, boats b where s.sid = r.sid and r.bid = b.bid and b.color = "red")
and
s.sname in
# id reserves not green boats
(select s.sname from sailors s, reserves r, boats b where s.sid = r.sid and r.bid = b.bid and b.color = "green");

# exercise8
select s.sid from sailors s where s.sname in
(select s.sname from sailors s, reserves r, boats b where s.sid = r.sid and r.bid = b.bid and b.color = "red")
and s.sid not in
(select s.sname from sailors s, reserves r, boats b where s.sid = r.sid and r.bid = b.bid and b.color = "green");

# Aggregate Operators
# exercise 4.1.1
SELECT DISTINCT count(*) FROM Sailors S;

# exercise 4.1.2
SELECT SUM(S.age) 
FROM Sailors S 
WHERE S.rating=10;

# exercise 4.1.3
select avg(s.age) from sailors s where s.rating = 10;

# exercise 4.1.4
select s.sname from sailors s 
where s.age = (select max(s2.age) from sailors s2);

# exercise 4.2.1
select distinct s.sname from sailors s where age between 25 and 35;

# exercise 4.2.2

# exercise 4.3.1
select s.sid, s.sname from sailors s where age = 25.5;

# exercise 4.3.2
select count(s.sid) from sailors s where age = 25.5;

# exercise 4.3.3
select * from sailors s where s.sname between "hansen" and "peterson";

# exercise 4.3.4
select * from sailors s where s.sname like "a%";

# exercise 4.3.5
select sum(s.age) from sailors s where s.age > 20;

# exercise 4.3.6
select min(s.age) from sailors s where age > 20;

use banking;
# exercise 5.2.1
select a.account_number from account a left join branch b 
on a. branch_name = b.branch_name 
where b.branch_city = "Riverside";

# exercise 5.2.2
select distinct a.account_number from account a
where a.branch_name = "A"
or a.branch_name = "B";

select distinct a.account_number from account a
where a.branch_name 
in ("a","b");

# exercise 5.4.1 group by
select d.customer_name, sum(a.balance) 
from account a inner join depositor d
on a.account_number = d.account_number
group by d.customer_name;

# exercise 5.4.2 having (filter grouping / must be used after having)
select d.customer_name, sum(a.balance) 
from account a inner join depositor d
on a.account_number = d.account_number
group by d.customer_name
having count(a.account_number) >= 2;

# exercise 5.4.1 having (filter grouping / must be used after having)
select d.customer_name, sum(a.balance) 
from account a inner join depositor d
on a.account_number = d.account_number
group by d.customer_name
having count(a.account_number) >= 2
order by d.customer_name;
	