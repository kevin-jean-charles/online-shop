package com.onlineshop.springbootecommerce.product;

import com.onlineshop.springbootecommerce.entity.Product;

import org.junit.jupiter.api.BeforeAll;

public class DelectProductTest {

    private Long productId;
    private Product product;

    @BeforeAll
    public void setup() {

    }

}

// @EnableAutoConfiguration
// public class DeleteCommentTest extends TicketTest {

// private CommentDao dao;
// @Autowired MongoClient mongoClient;

// @Value("${spring.mongodb.database}")
// String databaseName;

// private String commentId;

// private String ownerEmail = "owner@email.com";

// @Before
// public void setUp() {

// this.dao = new CommentDao(mongoClient, databaseName);

// Document commentDoc = new Document("email", ownerEmail);
// commentDoc.append("date", new Date());
// commentDoc.append("text", "some text");
// commentDoc.append("name", "user name");

// this.mongoClient.getDatabase(databaseName).getCollection("comments").insertOne(commentDoc);

// commentId = commentDoc.getObjectId("_id").toHexString();
// }

// @Test
// public void testDeleteOfOwnedComment() {

// Assert.assertTrue(
// "Should be able to delete owns comments: Check your deleteComment() method",
// dao.deleteComment(commentId, ownerEmail));
// }

// @Test
// public void testDeleteNotOwnedComment() {
// Assert.assertFalse(
// "Should not be able to delete not matching owner comment: Check your delete
// filter on deleteComment() method",
// dao.deleteComment(commentId, "some@email.com"));
// }

// @Test
// public void testDeleteNonExistingComment() {
// String nonExistingCommentId = new ObjectId().toHexString();
// Assert.assertFalse(
// "Deleting non-existing comment should return " + "false: Check your
// deleteComment() method",
// dao.deleteComment(nonExistingCommentId, ""));
// }

// @Test
// public void testDeleteIncorrectCommentId(){
// String nonExistingCommentId = new ObjectId().toHexString();
// Assert.assertFalse(
// "Deleting comment where _id value does not exist should not return true",
// dao.deleteComment(nonExistingCommentId, ownerEmail));
// }

// @Test(expected = IllegalArgumentException.class)
// public void testDeleteInvalidCommentId() {
// dao.deleteComment("", ownerEmail);
// }

// @After
// public void tearDown() {
// Bson deleteFiler = Filters.eq("_id", new ObjectId(this.commentId));
// this.mongoClient.getDatabase(databaseName).getCollection("comments").deleteOne(deleteFiler);
// }
// }