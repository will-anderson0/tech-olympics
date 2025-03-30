-- given the following table definitions, write a query to find the percentage of users who returned to log in within 7 days of their first login
WITH user_activity AS (
    SELECT 
        user_id,
        MIN(login_date) as first_login,
        MAX(CASE WHEN login_date <= MIN(login_date) OVER (PARTITION BY user_id) + INTERVAL '7 days' 
            THEN login_date END) as last_login_within_week
    FROM logins
    GROUP BY user_id
)
SELECT 
    ROUND(
        (COUNT(CASE WHEN last_login_within_week > first_login THEN 1 END)::FLOAT / COUNT(*)::FLOAT) * 100,
        2
    ) as return_percentage
FROM user_activity;