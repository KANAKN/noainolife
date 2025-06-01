-- Add result_type column to quiz_responses
ALTER TABLE quiz_responses
ADD COLUMN result_type text;