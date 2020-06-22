## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|


### Association
- has_many : groups_users
- has_many : user, through: :groups_users

## userテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|body|text|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|

### Association
- has many : groups_users
- has_many : group, thorugh: :groups_users