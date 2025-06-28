SET STATISTICS TIME ON;

WITH RecursiveSubdivisions AS (
    SELECT 
        s.id,
        s.name AS sub_name,
        s.parent_id,
        1 AS sub_level
    FROM subdivisions s
    JOIN collaborators c ON c.subdivision_id = s.id
    WHERE c.id = 710253

    UNION ALL

    SELECT 
        s.id,
        s.name AS sub_name,
        s.parent_id,
        rs.sub_level + 1
    FROM subdivisions s
    INNER JOIN RecursiveSubdivisions rs ON s.parent_id = rs.id
),
FilteredSubdivisions AS (
    SELECT * FROM RecursiveSubdivisions
    WHERE id NOT IN (100055, 100059)
),
CollsCount AS (
    SELECT 
        fs.id AS sub_id,
        COUNT(c.id) AS colls_count
    FROM FilteredSubdivisions fs
    LEFT JOIN collaborators c 
        ON c.subdivision_id = fs.id 
        AND c.age < 40
    GROUP BY fs.id
)

SELECT 
    c.id,
    c.name,
    fs.sub_name,
    fs.id AS sub_id,
    fs.sub_level,
    cc.colls_count
FROM collaborators c
JOIN FilteredSubdivisions fs ON c.subdivision_id = fs.id
JOIN CollsCount cc ON cc.sub_id = fs.id
WHERE c.age < 40
ORDER BY fs.sub_level ASC;

-- Результирующая таблица выводится в результат/results
-- Время выполнения выводится в сообщения/messages